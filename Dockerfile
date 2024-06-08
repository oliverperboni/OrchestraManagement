# Stage 1: Build the application
FROM node:latest AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm install @angular/cli -g
EXPOSE 4200
CMD [ "ng","serve","--host","0.0.0.0" ]
COPY . .
RUN npm run build

