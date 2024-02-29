FROM node:latest as build
WORKDIR /usr/src/app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:alpine as run
EXPOSE 80
COPY --from=build /usr/src/app/dist/ /usr/share/nginx/html/
CMD ["nginx", "-g", "daemon off;"]