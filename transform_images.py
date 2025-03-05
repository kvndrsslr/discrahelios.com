import os
import re
import subprocess

path = "./assets/images"
pattern = re.compile(r"\.(jpe?g)$", re.IGNORECASE)

images = [file for file in os.listdir(path) if pattern.search(file)]

for image in images:
    input = os.path.join(path, image)
    output = os.path.join(path, re.sub(pattern, ".webp", image))
    command = f"cwebp -q 80 \"{input}\" -o \"{output}\""
    try:
        subprocess.run(command, shell=True, check=True)
        print(f"Processed: {image} -> {output}")
    except subprocess.CalledProcessError as e:
        print(f"Error processing {image}: {e}")