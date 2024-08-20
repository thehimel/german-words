from django.conf import settings
import requests
import json

def fetch_openai(prompt):
    endpoint = 'https://api.openai.com/v1/completions'
    api_key = settings.OPENAI_API_KEY

    headers = {
        'Authorization': f'Bearer {api_key}',
        'Content-Type': 'application/json'
    }

    data = {
        'model': 'gpt-3.5-turbo',  # Or 'gpt-4' if you prefer
        'messages': [{'role': 'user', 'content': prompt}],
        'max_tokens': 200,
        'temperature': 0.7
    }

    return requests.post(endpoint, headers=headers, data=json.dumps(data))
