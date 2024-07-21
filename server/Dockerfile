FROM node:20

EXPOSE 3000
WORKDIR /app

COPY package*.json .
RUN npm ci

COPY . .
RUN npx prisma generate 
RUN npm run build

CMD ["npm", "start"]
