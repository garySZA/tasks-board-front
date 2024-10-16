FROM node:20.10.0-alpine3.19 AS dependencies
WORKDIR /app
COPY package.json package.json
RUN yarn install --frozen-lockfile

#* Builder
FROM node:20.10.0-alpine3.19 AS builder
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .
# Run yarn test
RUN yarn build

#* Deployment
FROM nginx:1.23.3 AS deployment
EXPOSE 80
COPY --from=builder /app/dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY nginx/nginx.conf /etc/nginx/conf.d
CMD [ "nginx", "-g", "daemon off;" ]