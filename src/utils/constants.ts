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
    UPDATE = 'UPDATE_CART',
    DELETE = 'DELETE_CART',
    DELETE_PRODUCT = 'DELETE_PRODUCT',
}

export enum BuystMsg {
    CREATE = 'CREATE_BUY',
    FIND_ALL = 'FIND_BUYS',
    FIND_ONE = 'FIND_BUY',
    UPDATE = 'UPDATE_BUY',
    DELETE = 'DELETE_BUY',
}


