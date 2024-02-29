FROM node:alpine as build
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build

FROM nginx:alpine as run
EXPOSE 80
COPY --from=build /app/dist /usr/share/nginx/html/
CMD ["nginx", "-g", "daemon off;"]