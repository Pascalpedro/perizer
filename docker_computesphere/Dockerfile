FROM nginx:stable
COPY index.html /usr/share/nginx/html/
COPY style.css /usr/share/nginx/html/css/
COPY script.js /usr/share/nginx/html/js/
#RUN chmod -R 777 /var/cache/nginx /var/run /var/log/nginx
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]


