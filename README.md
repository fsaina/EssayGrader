# README

### Set-up
In `model` directory download and unpack pretrained Word2Vec model with:
```console
wget --save-cookies cookies.txt --keep-session-cookies --no-check-certificate 'https://docs.google.com/uc?export=download&id=0B7XkCwpI5KDYNlNUTTlSS21pQmM' -O- | sed -rn 's/.*confirm=([0-9A-Za-z_]+).*/Code: \1\n/p'
```
```console
wget --load-cookies cookies.txt 'https://docs.google.com/uc?export=download&confirm=YOURCODEID&id=0B7XkCwpI5KDYNlNUTTlSS21pQmM' -O GoogleNews-vectors-negative300.bin.gz
```
The word2vec model should be unziped in `model` dir as `GoogleNews-vectors-negative300.bin`

### Running
Run the backend (might take some time to load w2v model and keras model), and keep it running with:
```console
python3 ./backend/backend.py
```

Run the frontend with:
```
npm run serve
```

Now open the IP in your browser given by the last command
