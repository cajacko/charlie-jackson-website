FROM tutum/lamp:latest
RUN rm -fr /app && git clone --recursive -b develop https://github.com/cajacko/charlie-jackson-website /app
RUN echo "create database charliejackson" | mysql -u root
EXPOSE 80 3306
CMD ["/run.sh"]
