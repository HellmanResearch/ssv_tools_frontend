FROM centos:7.8.2003
MAINTAINER mingming.tang
RUN yum -y install epel-release
RUN yum -y install nginx
COPY dist /opt/dist
# COPY others/nginx.conf /etc/nginx/nginx.conf
CMD nginx