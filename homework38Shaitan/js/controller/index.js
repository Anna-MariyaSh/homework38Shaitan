'use strict';


function controller(view, model) {
    return  {
        getData(dbKey) {
            if(!dbKey) throw new Error('Database key is not defined');
            return model.getData(dbKey);
        },

        setData(data) {
            if(!this.validateData(data)) throw new Error('Validation Error!');
            model.setData(data);
        },

        validateData(data) {
            if(Object.keys(data).length === 0) return false;


            for(const key in data) {
                // Упрощаем валидацию объекта так как у нас добавились новые поля
                if(data[key] === '') return false;

            }

            return true;
        },

        changeCompleted(itemId, dbKey, status) {
            if(!itemId) throw new Error('itemId is not defined');

            model.changeCompleted(itemId, dbKey, status);
        },

        removeItem(dbKey, itemId) {
            if(!itemId) throw new Error('No id provided');

            model.removeItem(dbKey, itemId)
        },

        removeAll(dbKey) {
            model.clearStorage(dbKey);
        }
    }
}
