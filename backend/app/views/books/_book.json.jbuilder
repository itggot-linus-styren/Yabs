json.extract! book, :id, :title_id, :barcode, :condition, :created_at, :updated_at
json.url book_url(book, format: :json)
