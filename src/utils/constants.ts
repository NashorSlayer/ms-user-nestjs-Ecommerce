export enum RabbitMQ {
    UserQueue = 'ms-user',
}

export enum UserMsg {
    CREATE = 'CREATE_USER',
    FIND_ALL = 'FIND_USERS',
    FIND_ONE = 'FIND_USER',
    UPDATE = 'UPDATE_USER',
    DELETE = 'DELETE_USER',
}

export enum CartMsg {
    CREATE = 'CREATE_CART',
    FIND_ALL = 'FIND_CARTS',
    FIND_ONE = 'FIND_CART',
    DELETE = 'DELETE_CART',
}

export enum HistoricalMsg {
    CREATE = 'CREATE_HISTORICAL',
    FIND_ALL = 'FIND_HISTORICALS',
    FIND_ONE = 'FIND_HISTORICAL',
    DELETE = 'DELETE_HISTORICAL',
}

export enum Historical_productMsg {
    CREATE = 'CREATE_HISTORICAL_PRODUCT',
    UPDATE = 'UPDATE_CART_PRODUCT',
    FIND_ALL = 'FIND_HISTORICAL_PRODUCTS',
    FIND_ONE = 'FIND_HISTORICAL_PRODUCT',
    DELETE = 'DELETE_HISTORICAL_PRODUCT',
}

export enum Cart_productMsg {
    CREATE = 'CREATE_CART_PRODUCT',
    UPDATE = 'UPDATE_CART_PRODUCT',
    FIND_ALL = 'FIND_CART_PRODUCTS',
    FIND_ONE = 'FIND_CART_PRODUCT',
    DELETE = 'DELETE_CART_PRODUCT',
}

export enum AuthMsg {
    LOGIN = 'LOGIN',
    REGISTER = 'REGISTER',
}


