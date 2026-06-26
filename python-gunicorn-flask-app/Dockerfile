FROM docker.io/python:3.14

RUN groupadd -r snake && useradd -r -g snake snake

WORKDIR /home/snake

COPY Pipfile* ./
ENV PIP_NO_CACHE_DIR=false
RUN pip install --disable-pip-version-check --no-cache-dir pipenv && pipenv install --system --deploy

COPY healthcheck.py ./

COPY fAPP ./fAPP

USER snake

EXPOSE 5000

ENV GUNICORN_CMD_ARGS="--bind=0.0.0.0:5000 --workers=4 --log-level=info"

HEALTHCHECK CMD python healthcheck.py || exit 1

CMD [ "gunicorn", "fAPP:app" ]
