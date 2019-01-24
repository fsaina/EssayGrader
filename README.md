# README

### Set-up
In `models` directory download and unpack pretrained Word2Vec model with:
```console
wget https://s3.amazonaws.com/dl4j-distribution/GoogleNews-vectors-negative300.bin.gz
gunzip GoogleNews-vectors-negative300.bin
```
The word2vec model should be unziped in `models` dir as `GoogleNews-vectors-negative300.bin`

### Running
Run the backend (might take some time to load w2v model and keras model), and keep it running with:
```console
python3 ./backend/backend.py
```

Download dependency modules with npm from the `frontend` folder with:
```
npm install
```

Run the frontend with:
```
npm run serve
```

Now open the IP in your browser given by the last command
