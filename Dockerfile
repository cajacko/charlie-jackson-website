FROM tutum/lamp:latest
RUN rm -fr /app && git clone -b develop https://github.com/cajacko/charlie-jackson-website /app
EXPOSE 80 3306
CMD ["/run.sh"]
