import React, { useState, useEffect, useRef } from 'react';
import { Edit3, Move, Type, Palette, Sparkles, X, Check, Save, RefreshCw, MousePointer2, Trash2 } from 'lucide-react';
import { remakeContent } from '../services/geminiService';
import { Button } from './Button';

// Helper to generate a unique CSS selector for an element
const getUniqueSelector = (el: HTMLElement): string => {
  if (el.id) return `#${el.id}`;
  
  let path = [];
  while (el.parentElement) {
    let tag = el.tagName.toLowerCase();
    let index = Array.from(el.parentElement.children)
      .filter(child => child.tagName === el.tagName)
      .indexOf(el) + 1;
    
    path.unshift(`${tag}:nth-of-type(${index})`);
    el = el.parentElement;
  }
  return path.join(' > ');
};

export const Editor: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [selectedElement, setSelectedElement] = useState<HTMLElement | null>(null);
  const [aiPrompt, setAiPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Track modified elements to save them
  // We use a Set of selectors to know what to save
  const [modifiedSelectors, setModifiedSelectors] = useState<Set<string>>(new Set());

  // Style states
  const [fontSize, setFontSize] = useState('');
  const [color, setColor] = useState('#000000');
  const [fontFamily, setFontFamily] = useState('');

  // LOAD CHANGES ON MOUNT
  useEffect(() => {
    const savedData = localStorage.getItem('werfplaats-editor-changes');
    if (savedData) {
      try {
        const changes = JSON.parse(savedData);
        // We need to wait a tick for React to render the DOM
        setTimeout(() => {
            Object.keys(changes).forEach(selector => {
                const el = document.querySelector(selector) as HTMLElement;
                if (el) {
                    if (changes[selector].style) el.style.cssText = changes[selector].style;
                    if (changes[selector].html) el.innerHTML = changes[selector].html;
                }
            });
        }, 500); // Small delay to ensure DOM is ready
      } catch (e) {
        console.error("Error loading saved changes", e);
      }
    }
  }, []);

  // SAVE FUNCTION
  const handleSave = () => {
    const changes: Record<string, { style: string, html: string }> = {};
    
    // If we have tracked selectors, use those. 
    // Alternatively, strictly for this prototype, we can re-query the selectors we know we touched.
    // Ideally, we persist the 'modifiedSelectors' set, but for now let's just create a save object.
    
    modifiedSelectors.forEach(selector => {
        const el = document.querySelector(selector) as HTMLElement;
        if (el) {
            changes[selector] = {
                style: el.style.cssText,
                html: el.innerHTML
            };
        }
    });

    localStorage.setItem('werfplaats-editor-changes', JSON.stringify(changes));
    alert('Wijzigingen lokaal opgeslagen! (LocalStorage)');
  };

  const handleReset = () => {
      if(confirm('Weet je zeker dat je alle wijzigingen wilt wissen?')) {
          localStorage.removeItem('werfplaats-editor-changes');
          window.location.reload();
      }
  };

  const trackChange = (el: HTMLElement) => {
      const selector = getUniqueSelector(el);
      setModifiedSelectors(prev => new Set(prev).add(selector));
  };

  // Enable/Disable Editor Mode
  useEffect(() => {
    const handleGlobalClick = (e: MouseEvent) => {
      if (!isActive) return;

      // Ignore clicks inside the editor UI
      if ((e.target as HTMLElement).closest('.editor-ui')) return;

      e.preventDefault();
      e.stopPropagation();

      const target = e.target as HTMLElement;
      setSelectedElement(target);
      
      // Initialize controls with computed styles
      const computed = window.getComputedStyle(target);
      setFontSize(computed.fontSize.replace('px', ''));
      setColor(rgbToHex(computed.color));
      setFontFamily(computed.fontFamily.split(',')[0].replace(/['"]/g, ''));
    };

    const handleMouseOver = (e: MouseEvent) => {
      if (!isActive) return;
      if ((e.target as HTMLElement).closest('.editor-ui')) return;
      
      const target = e.target as HTMLElement;
      target.style.outline = '2px dashed #FF5A1F';
      target.style.cursor = 'pointer';
    };

    const handleMouseOut = (e: MouseEvent) => {
      if (!isActive) return;
      const target = e.target as HTMLElement;
      if (target !== selectedElement) {
         target.style.outline = '';
      }
    };

    if (isActive) {
      document.addEventListener('click', handleGlobalClick, true);
      document.addEventListener('mouseover', handleMouseOver);
      document.addEventListener('mouseout', handleMouseOut);
    } else {
      if (selectedElement) selectedElement.style.outline = '';
      setSelectedElement(null);
    }

    return () => {
      document.removeEventListener('click', handleGlobalClick, true);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
      // Cleanup outlines
      const allElements = document.querySelectorAll('*');
      allElements.forEach((el) => {
        (el as HTMLElement).style.outline = '';
        if (isActive) (el as HTMLElement).style.cursor = '';
      });
    };
  }, [isActive, selectedElement]);

  // Keep outline on selected element
  useEffect(() => {
    if (selectedElement) {
        selectedElement.style.outline = '3px solid #00D084';
    }
  }, [selectedElement]);

  // Handle Dragging
  useEffect(() => {
    if (!selectedElement || !isActive) return;

    let isDragging = false;
    let startX = 0;
    let startY = 0;
    let initialTransformX = 0;
    let initialTransformY = 0;

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button !== 0) return; // Only left click
      if (e.target === selectedElement) {
        isDragging = true;
        startX = e.clientX;
        startY = e.clientY;
        
        // Parse current transform
        const transform = window.getComputedStyle(selectedElement).transform;
        const matrix = new DOMMatrix(transform);
        initialTransformX = matrix.m41;
        initialTransformY = matrix.m42;
        
        selectedElement.style.cursor = 'grabbing';
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging || !selectedElement) return;
      e.preventDefault();
      
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      
      selectedElement.style.transform = `translate(${initialTransformX + dx}px, ${initialTransformY + dy}px)`;
      trackChange(selectedElement); // Track change on drag
    };

    const handleMouseUp = () => {
      isDragging = false;
      if (selectedElement) selectedElement.style.cursor = 'pointer';
    };

    // Attach to element for mouse down
    selectedElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      if (selectedElement) selectedElement.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [selectedElement, isActive]);

  // Update Styles
  const updateStyle = (property: string, value: string) => {
    if (!selectedElement) return;
    trackChange(selectedElement);
    if (property === 'fontSize') {
        selectedElement.style.fontSize = `${value}px`;
        setFontSize(value);
    } else if (property === 'color') {
        selectedElement.style.color = value;
        setColor(value);
    } else if (property === 'fontFamily') {
        selectedElement.style.fontFamily = value;
        setFontFamily(value);
    }
  };

  // AI Remake
  const handleAiRemake = async () => {
    if (!selectedElement || !aiPrompt) return;
    setIsGenerating(true);
    const newContent = await remakeContent(selectedElement.innerText, aiPrompt);
    selectedElement.innerText = newContent;
    trackChange(selectedElement);
    setIsGenerating(false);
  };

  // Helper: RGB to Hex
  const rgbToHex = (rgb: string) => {
    if (rgb.startsWith('#')) return rgb;
    const rgbValues = rgb.match(/\d+/g);
    if (!rgbValues) return '#000000';
    return '#' + rgbValues.slice(0, 3).map(x => {
        const hex = parseInt(x).toString(16);
        return hex.length === 1 ? '0' + hex : hex;
    }).join('');
  };

  return (
    <>
      {/* Toggle Button */}
      <div className="fixed bottom-6 left-6 z-[100] editor-ui flex flex-col gap-2">
         {isActive && (
            <>
                <button
                onClick={handleSave}
                className="p-4 rounded-full shadow-xl bg-brand-green text-white hover:scale-110 transition-transform"
                title="Opslaan"
                >
                <Save size={24} />
                </button>
                <button
                onClick={handleReset}
                className="p-4 rounded-full shadow-xl bg-red-500 text-white hover:scale-110 transition-transform"
                title="Reset Wijzigingen"
                >
                <Trash2 size={24} />
                </button>
            </>
         )}
        <button
          onClick={() => setIsActive(!isActive)}
          className={`p-4 rounded-full shadow-2xl transition-all transform hover:scale-110 ${
            isActive ? 'bg-brand-orange text-white rotate-180' : 'bg-white text-gray-800'
          }`}
          title={isActive ? "Editor Sluiten" : "Editor Openen"}
        >
          {isActive ? <X size={24} /> : <Edit3 size={24} />}
        </button>
      </div>

      {/* Editor Toolbar */}
      {isActive && (
        <div className="fixed top-24 right-6 w-80 bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-6 z-[100] editor-ui animate-in slide-in-from-right fade-in duration-300">
           <div className="flex items-center justify-between mb-6">
              <h3 className="font-display font-bold text-lg flex items-center gap-2">
                 <Edit3 size={18} className="text-brand-orange" />
                 Editor Mode
              </h3>
              <div className="px-2 py-1 bg-green-100 text-green-700 text-[10px] font-bold uppercase rounded-full tracking-widest">
                 Active
              </div>
           </div>

           {!selectedElement ? (
              <div className="text-center py-8 text-gray-400 border-2 border-dashed border-gray-200 rounded-2xl">
                 <MousePointer2 size={32} className="mx-auto mb-3 opacity-50" />
                 <p className="text-sm">Klik op een element <br/> om te bewerken</p>
              </div>
           ) : (
              <div className="space-y-6">
                 {/* Selected Element Info */}
                 <div className="bg-gray-50 p-3 rounded-xl border border-gray-100">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-1">Geselecteerd</p>
                    <p className="text-xs font-mono text-gray-800 truncate">{selectedElement.tagName.toLowerCase()} • {selectedElement.className.split(' ')[0] || 'no-class'}</p>
                 </div>

                 {/* Typography Controls */}
                 <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Type size={12} /> Typografie & Stijl
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                       <div>
                          <label className="text-[10px] text-gray-500 block mb-1">Grootte (px)</label>
                          <input 
                            type="number" 
                            value={fontSize} 
                            onChange={(e) => updateStyle('fontSize', e.target.value)}
                            className="w-full bg-gray-100 border-none rounded-lg p-2 text-xs font-bold"
                          />
                       </div>
                       <div>
                          <label className="text-[10px] text-gray-500 block mb-1">Kleur</label>
                          <div className="flex items-center gap-2 bg-gray-100 rounded-lg p-1">
                             <input 
                               type="color" 
                               value={color} 
                               onChange={(e) => updateStyle('color', e.target.value)}
                               className="w-8 h-8 rounded cursor-pointer border-none p-0 bg-transparent"
                             />
                             <span className="text-[10px] font-mono text-gray-600">{color}</span>
                          </div>
                       </div>
                    </div>
                    <div className="mt-3">
                        <label className="text-[10px] text-gray-500 block mb-1">Lettertype</label>
                        <select 
                            value={fontFamily} 
                            onChange={(e) => updateStyle('fontFamily', e.target.value)}
                            className="w-full bg-gray-100 border-none rounded-lg p-2 text-xs font-bold"
                        >
                            <option value="Inter">Inter</option>
                            <option value="Oswald">Oswald</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Courier New">Courier</option>
                        </select>
                    </div>
                 </div>

                 <div className="border-t border-gray-100 my-4"></div>

                 {/* Move Control Info */}
                 <div className="flex items-center gap-3 text-xs text-gray-500 bg-blue-50 p-3 rounded-xl text-blue-700">
                    <Move size={14} />
                    <span>Sleep het element om te verplaatsen</span>
                 </div>

                 <div className="border-t border-gray-100 my-4"></div>

                 {/* AI Remake */}
                 <div>
                    <p className="text-[10px] text-brand-orange font-bold uppercase tracking-widest mb-3 flex items-center gap-2">
                        <Sparkles size={12} /> AI Remake
                    </p>
                    <textarea 
                        value={aiPrompt}
                        onChange={(e) => setAiPrompt(e.target.value)}
                        placeholder="Bv: Maak het formeler, of: Vertaal naar Engels..."
                        className="w-full bg-gray-50 border border-gray-200 rounded-xl p-3 text-xs mb-3 focus:ring-2 focus:ring-brand-orange focus:border-transparent outline-none resize-none h-20"
                    />
                    <Button 
                        onClick={handleAiRemake}
                        disabled={isGenerating || !aiPrompt}
                        className="w-full !py-2 !text-xs flex items-center justify-center gap-2"
                        variant="primary"
                    >
                        {isGenerating ? <RefreshCw className="animate-spin" size={14} /> : <Sparkles size={14} />}
                        {isGenerating ? 'Bezig...' : 'Herschrijf met AI'}
                    </Button>
                 </div>
              </div>
           )}
        </div>
      )}
    </>
  );
};