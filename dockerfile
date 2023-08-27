FROM nginx:alpine

RUN mkdir -p /dist
WORKDIR /dist

COPY ./build /dist/
COPY ./nginx.conf /

CMD envsubst < /nginx.conf > /etc/nginx/nginx.conf \
    && cat /etc/nginx/nginx.conf \
    && nginx -g 'daemon off;'