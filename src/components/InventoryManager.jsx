import { useReducer, useRef, useCallback } from "react";

const initialState = { products: [] };

function reducer(state, action) {
    switch (action.type) {
        case "add":
            return {
                products: [...state.products, {
                    id: Date.now(),
                    name: action.name,
                    quantity: 1
                }]
            };
        case "increment":
            return {
                products: state.products.map(p =>
                    p.id === action.id ? { ...p, quantity: p.quantity + 1 } : p
                )
            };
        case "decrement":
            return {
                products: state.products.map(p =>
                    p.id === action.id && p.quantity > 1 ? { ...p, quantity: p.quantity - 1 } : p
                )
            };
        case "remove":
            return {
                products: state.products.filter(p => p.id !== action.id)
            };
        default:
            return state;
    }
}

export default function InventoryManager() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const inputRef = useRef(null);

    const handleAddProduct = () => {
        if (inputRef.current.value.trim() !== "") {
            dispatch({ type: "add", name: inputRef.current.value });
            inputRef.current.value = ""; // Limpiar input
        }
    };

    const handleIncrement = useCallback((id) => {
        dispatch({ type: "increment", id });
    }, []);

    const handleDecrement = useCallback((id) => {
        dispatch({ type: "decrement", id });
    }, []);

    return (
       <div style={styles.container}>
            <h2 style={styles.title}>📦 Gestor de Inventario</h2>
            
            <div style={styles.inputGroup}>
                <input 
                    ref={inputRef} 
                    type="text" 
                    placeholder="Nombre del producto..." 
                    style={styles.input}
                    onKeyDown={(e) => e.key === 'Enter' && handleAddProduct()}
                />
                <button onClick={handleAddProduct} style={styles.addButton}>
                    Agregar
                </button>
            </div>

            {state.products.length === 0 ? (
                <p style={styles.emptyText}>No hay productos registrados en el inventario.</p>
            ) : (
                <ul style={styles.list}>
                    {state.products.map((product) => (
                        <li key={product.id} style={styles.listItem}>
                            <div style={styles.productInfo}>
                                <span style={styles.productName}>{product.name}</span>
                                <span style={styles.quantityBadge}>Cant: {product.quantity}</span>
                            </div>
                            
                            <div style={styles.buttonGroup}>
                                <button 
                                    onClick={() => handleDecrement(product.id)} 
                                    style={styles.secondaryButton}
                                    title="Disminuir"
                                >
                                    -
                                </button>
                                <button 
                                    onClick={() => handleIncrement(product.id)} 
                                    style={styles.secondaryButton}
                                    title="Aumentar"
                                >
                                    +
                                </button>
                                <button 
                                    onClick={() => dispatch({ type: "remove", id: product.id })} 
                                    style={styles.deleteButton}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

// Estilos modernos para el componente
const styles = {
    container: {
        maxWidth: "500px",
        margin: "40px auto",
        padding: "24px",
        background: "#292525",
        borderRadius: "12px",
        boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        fontFamily: "system-ui, -apple-system, sans-serif",
    },
    title: {
        margin: "0 0 20px 0",
        fontSize: "22px",
        color: "#acccff",
        textAlign: "center",
    },
    inputGroup: {
        display: "flex",
        gap: "10px",
        marginBottom: "20px",
    },
    input: {
        flex: 1,
        padding: "10px 14px",
        fontSize: "15px",
        border: "1px solid #cbd5e1",
        borderRadius: "8px",
        outline: "none",
        transition: "border-color 0.2s",
    },
    addButton: {
        padding: "10px 18px",
        backgroundColor: "#2563eb",
        color: "#ffffff",
        border: "none",
        borderRadius: "8px",
        fontWeight: "600",
        cursor: "pointer",
        transition: "background-color 0.2s",
    },
    list: {
        listStyle: "none",
        padding: 0,
        margin: 0,
        display: "flex",
        flexDirection: "column",
        gap: "10px",
    },
    listItem: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "12px 16px",
        backgroundColor: "#192128",
        border: "1px solid #e2e8f0",
        borderRadius: "8px",
    },
    productInfo: {
        display: "flex",
        alignItems: "center",
        gap: "12px",
    },
    productName: {
        fontSize: "15px",
        fontWeight: "500",
        color: "#7795be",
    },
    quantityBadge: {
        backgroundColor: "#e0f2fe",
        color: "#0369a1",
        padding: "2px 8px",
        borderRadius: "6px",
        fontSize: "13px",
        fontWeight: "600",
    },
    buttonGroup: {
        display: "flex",
        gap: "6px",
        alignItems: "center",
    },
    secondaryButton: {
        width: "32px",
        height: "32px",
        backgroundColor: "#e2e8f0",
        color: "#334155",
        border: "none",
        borderRadius: "6px",
        fontWeight: "bold",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "16px",
    },
    deleteButton: {
        padding: "6px 12px",
        backgroundColor: "#fee2e2",
        color: "#991b1b",
        border: "none",
        borderRadius: "6px",
        fontSize: "13px",
        fontWeight: "600",
        cursor: "pointer",
    },
    emptyText: {
        textAlign: "center",
        color: "#64748b",
        fontSize: "14px",
        margin: "20px 0",
    }
};