# https://dev.to/abbasogaji/how-to-dockerize-your-nestjs-app-for-production-2lmf
FROM node:16 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
#RUN npm run build
RUN npx frontity build


FROM node:16-alpine
WORKDIR /app
COPY --from=builder /app ./
EXPOSE 3000
#CMD ["npm", "run", "hang_to_debug"]
#CMD ["npm", "run", "start:prod"]
CMD ["npx", "frontity", "serve"]
