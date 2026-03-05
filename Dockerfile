FROM node:20-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM node:20-alpine
WORKDIR /app
RUN npm install -g serve
COPY --from=build /app/dist ./dist

# Start the server on the dynamic port expected by Google Cloud Run.
CMD ["sh", "-c", "sed -i \"s|__GEMINI_RUNTIME_KEY__|${GEMINI_API_KEY:-}|g\" dist/index.html && serve -s dist -l ${PORT:-8080}"]
