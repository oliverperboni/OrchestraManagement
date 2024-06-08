# Stage 1: Build the application
# FROM node:latest AS build
# WORKDIR /app
# COPY . .
# RUN npm install
# RUN npm install @angular/cli -g
# EXPOSE 4200
# CMD [ "ng","serve","--host","0.0.0.0" ]
# COPY . .
# RUN npm run build

FROM node:latest as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/dist/ccpmanegement/browser /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8085
CMD ["nginx", "-g", "daemon off;"]

