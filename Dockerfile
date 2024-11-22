FROM node:18.20-alpine
WORKDIR /usr/scr/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
