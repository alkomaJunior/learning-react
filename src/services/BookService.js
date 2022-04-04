// Importing helpers
import { apiClient } from '../helpers/api-helpers/apiClient';

// Implementation of the service
class BookService {
    getAllBooks() {
        return apiClient.get("/books");
    }
}

export default BookService;