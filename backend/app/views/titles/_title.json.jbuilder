json.extract! title, :id, :name, :isbn, :cost, :type, :created_at, :updated_at
json.url title_url(title, format: :json)
