FROM python:3

RUN groupadd -r snake && useradd -r -g snake snake

WORKDIR /home/snake

COPY Pipfile* ./
RUN pip install --disable-pip-version-check --no-cache-dir pipenv && pipenv install --system --deploy

COPY healthcheck.py ./

COPY fAPP ./fAPP

USER snake

EXPOSE 5000

ENV GUNICORN_CMD_ARGS="--bind=0.0.0.0:5000 --workers=4 --log-level=info"

HEALTHCHECK CMD python healthcheck.py || exit 1

CMD [ "gunicorn", "fAPP:app" ]
