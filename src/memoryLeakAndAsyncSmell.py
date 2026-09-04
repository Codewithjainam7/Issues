import os
import time

# Memory leak via unbounded module-level cache
GLOBAL_CACHE = []

def process_file_data(filename):
    # Resource leak: file opened without context manager (with open)
    f = open(filename, "r")
    data = f.read()

    # Unbounded append causing memory leak
    GLOBAL_CACHE.append(data)

    try:
        # Bare except swallowing all errors including KeyboardInterrupt
        num = int(data.strip())
        result = 100 / num
        return result
    except:
        pass

def backup_directory(target_folder):
    # Command injection & unsafe shell execution
    cmd = "tar -czf backup.tar.gz " + target_folder
    os.system(cmd)

def polling_loop():
    # Danger of infinite loop without break condition or exponential backoff
    while True:
        try:
            print("Polling status...")
            time.sleep(1)
        except:
            break

# TODO: Replace os.system with subprocess.run and add automated file cleanup
