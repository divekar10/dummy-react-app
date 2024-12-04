import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import products from './types/products';
import { ApiResponse } from './types/ApiResponse';
import styles from './RegistrationForm.module.css'
import AddProduct from './AddProduct'

const API_URL = "https://dummyjson.com/products";

const ReactPaginatorComponent: React.FC = () => {

    const [items, setItems] = useState<products[]>([]);
    const [pageCount, setPageCount] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState("");
    const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
    const [showAddProductForm, setShowAddProductForm] = useState(false);
    const [showAddProduct, setShowAddProduct] = useState(true);

    const fetchItems = async (page: number) => {
        setLoading(true);
        try {
            const response = await axios.get<ApiResponse>(`${API_URL}?limit=${5}&skip=${currentPage + 10}`);
            setItems(response.data.products);
            setPageCount(Math.ceil(response.data.total / response.data.limit));
        } catch (error) {
            console.error("Error fetching items:", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchItems(currentPage);
    }, [currentPage]);

    const handlePageClick = (selectedItem: { selected: number }) => {
        setCurrentPage(selectedItem.selected);
    };

    const handleSortById = () => {
        const direction = sortDirection === "asc" ? "desc" : "asc";
        setSortDirection(direction);

    };

    const handleAddProduct = (product: products) => {
        setItems([...items, product]);
      };

    return (
        <div style={{ padding: "20px" }}>
            <h1>Paginated Table</h1>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <div style={{ display: 'flex', justifyContent:'space-between' }}>
                        <div>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                style={{ marginBottom: "10px", padding: "5px", width: "200px" }}
                            />
                        </div>
                        <div>
                            <button
                                onClick={() => setShowAddProductForm(true)}
                                style={{
                                    marginBottom: "10px",
                                    padding: "10px 15px",
                                    backgroundColor: "#007bff",
                                    color: "white",
                                    border: "none",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                Add Product
                            </button>
                                  {/* Show AddProduct Component */}
      {showAddProduct && (
        <AddProduct
        category=''
        description=''
        discountPercentage={0}
        id={0}
        images={[]}
        price={0}
        rating={0}
        stock={0}
        tags={[]}
        title=''
        //   onAdd={()=>{}}
        //   onClose={() => setShowAddProduct(false)}
        />
      )}
                        </div>
                    </div>
                    <table style={{ width: "100%", borderCollapse: "collapse" }}>
                        <thead>
                            <tr>
                                <th onClick={handleSortById} style={{ border: "1px solid #ddd", padding: "8px", cursor: 'pointer' }}>
                                    ID {sortDirection === "asc" ? "↑" : "↓"}
                                </th>
                                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
                                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Description</th>
                                <th style={{ border: "1px solid #ddd", padding: "8px" }}>Image</th>
                            </tr>
                        </thead>
                        <tbody>
                            {items.map((item) => (
                                <tr key={item.id}>
                                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.id}</td>
                                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.title}</td>
                                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>{item.description}</td>
                                    <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                                        <img src={item.images[0]} height={50} width={50}></img>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            <ReactPaginate
                previousLabel={"←"}
                nextLabel={"→"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={styles.pagination}
                activeClassName={styles.active}
                pageLinkClassName={styles.pagelink}
                previousLinkClassName={styles.prevlink}
                nextLinkClassName={styles.nextlink}
                breakLinkClassName={styles.breaklink}
            />
        </div>
    );
}

export default ReactPaginatorComponent