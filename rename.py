import os

directory = 'data'
 
# iterate over files in
# that directory
i = 0

for filename in os.listdir(directory):
    f = os.path.join(directory, filename)
    split_tup = os.path.splitext(filename)
    extension = split_tup[1]
    new_name = 'img' + str(i) + extension
    path = os.path.join(directory, new_name)
    # checking if it is a file
    if os.path.isfile(f):
        os.rename(f, path)
    i += 1
        

# os.rename('a.txt', 'b.kml')
