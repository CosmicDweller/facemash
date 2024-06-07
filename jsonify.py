import json
import os

directory = 'data'

# Data to be written
dictionary = {
}

i = 0

for filename in os.listdir(directory):
    f = os.path.join(directory, filename)
    dictionary[str(i)] = f
    i += 1

with open("images.json", "w") as outfile:
    json.dump(dictionary, outfile)