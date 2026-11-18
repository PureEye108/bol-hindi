import http.server
import socketserver
import webbrowser
import os
import sys

PORT = 8090
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def log_message(self, format, *args):
        # Clean logging
        sys.stderr.write(f"[{self.log_date_time_string()}] {format % args}\n")

def run():
    os.chdir(DIRECTORY)
    server_address = ("", PORT)
    
    # Allow port reuse
    socketserver.TCPServer.allow_reuse_address = True
    
    try:
        with socketserver.TCPServer(server_address, Handler) as httpd:
            url = f"http://localhost:{PORT}"
            print("=" * 60)
            print("  Namaste! Bol Hindi Learning Lab is running locally:")
            print(f"  URL: {url}")
            print("  Features:")
            print("    - 🔊 Dual Audio (Native WAV recordings + Web Speech hi-IN)")
            print("    - 🎙️ Speech Pronunciation Checker (Microphone access)")
            print("    - 🔤 Latin words (Hinglish) + Devanagari script")
            print("    - 🎯 Interactive Listening & Speaking Quiz")
            print("  Press Ctrl+C to stop the server anytime.")
            print("=" * 60)
            
            # Automatically open browser
            webbrowser.open(url)
            
            httpd.serve_forever()
    except OSError as e:
        if e.errno == 98 or e.errno == 10048:
            alt_port = PORT + 1
            print(f"Port {PORT} in use, trying {alt_port}...")
            with socketserver.TCPServer(("", alt_port), Handler) as httpd:
                url = f"http://localhost:{alt_port}"
                print(f"Bol Hindi is running at: {url}")
                webbrowser.open(url)
                httpd.serve_forever()
        else:
            raise

if __name__ == "__main__":
    run()
