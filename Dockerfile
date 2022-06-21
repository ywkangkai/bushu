FROM alpine:latest
LABEL maintainer='keyou100@qq.com'
LABEL description='Install nginx'

RUN apk update && \
    apk add --allow-untrusted ca-certificates bash curl iputils supervisor nginx && \
    apk upgrade && \ 
    rm -rf /var/cache/apk/* && \
    mkdir /tmp/nginx && \
    mkdir -p /var/www/html && \
    chown -R nginx:nginx /var/www/html

COPY dist/ /var/www/html/
COPY configs/default.conf /etc/nginx/conf.d/
COPY configs/nginx.conf /etc/nginx/nginx.conf
COPY configs/supervisord.conf /etc/supervisord.conf

VOLUME /var/log/nginx/
EXPOSE 80 8000 443
CMD ["supervisord"]
