FROM node:16-alpine  as builder

WORKDIR  /app

COPY package.json /app/package.json

RUN npm install --frozen-lockfile

COPY . /app

RUN npm run build

FROM nginx:stable-alpine

COPY --from=builder /app/build /usr/share/nginx/html

RUN rm /etc/nginx/conf.d/default.conf

COPY --from=builder /app/nginx/default.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]