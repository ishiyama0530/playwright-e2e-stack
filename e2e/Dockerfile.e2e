FROM mcr.microsoft.com/playwright:latest

EXPOSE 9323
WORKDIR /app

COPY ./e2e/package*.json .
RUN npm ci

COPY ./e2e .
COPY ./server/prisma ./prisma
RUN npx prisma generate

CMD ["npm", "test"]
