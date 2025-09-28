name: Hello Pooja Workflow

on:
  workflow_dispatch:

jobs:
  greet:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v3

      - name: Run hello-pooja action
        uses: actions/hello-pooja@e76147da8e5c81eaf017dede5645551d4b94427b
        with:
          who-to-greet: 'Mona the Octocat'