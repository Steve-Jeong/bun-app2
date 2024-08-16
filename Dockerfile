FROM oven/bun:1.1.24-alpine
WORKDIR /app
COPY package*.* bun.lockb ./
RUN bun install --production
COPY . .
# Set permissions
RUN chown -R bun:bun /app
# Set user. 위 chown에 지정된 user/group과 같아야 한다.
USER bun
ENV PORT=$PORT
EXPOSE $PORT
CMD ["bun", "run", "dev"]