FROM node:10-alpine as builder

COPY package.json package-lock.json ./

RUN npm install && mkdir /blog-ui && mv ./node_modules ./blog-ui

WORKDIR /blog-ui

COPY . .

ARG REACT_APP_HOST

ENV REACT_APP_HOST $REACT_APP_HOST

RUN npm run build

FROM nginx:alpine

COPY ./.nginx/nginx.conf /etc/nginx/nginx.conf

RUN rm -rf /usr/share/nginx/html/*

COPY --from=builder /blog-ui/build /usr/share/nginx/html

EXPOSE 80

ENTRYPOINT ["nginx", "-g", "daemon off;"]