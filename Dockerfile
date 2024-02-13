# Use a lightweight Node.js image
FROM node:21-alpine3.18

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and yarn.lock files to the container
COPY package.json yarn.lock ./

# Copy the .yarnrc.yml and .pnp.cjs files to the container
COPY .yarnrc.yml .pnp.cjs ./

# Copy the entire project to the container
COPY . .

# Install dependencies using yarn
RUN yarn install


# Set the environment variable for running the landing page
ENV RUN_LANDING_PAGE=true
ENV NANO_APP_NAME="nano1"

# Set the default command to run when the container starts
CMD if [ "$RUN_LANDING_PAGE" = "true" ]; then \
        yarn dev --cwd ./packages/server & \
        sleep 2 && yarn out && cd ./apps/landing && yarn start; \
    else \
        cd ./aps/{NANO_APP_NAME} && yarn start; \
    fi

# Expose the necessary ports
EXPOSE 5000 5173
