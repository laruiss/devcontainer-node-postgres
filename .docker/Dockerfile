FROM node:16.11.0-bullseye-slim as base

WORKDIR /app

RUN apt update \
    && apt upgrade -y \
    && apt install git zsh -y
