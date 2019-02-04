import React, { Component } from 'react';

class CategoryFilter extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="row categories w-100 mt-3 pt-4 pb-4 pl-4 pr-4">
                <div class="col-md-12"><p>Categories</p></div>
                <div class="col-md-6">
                    <label class="special-checkbox">Todos
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                    <label class="special-checkbox">Chicos
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                    <label class="special-checkbox">Medianos
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                </div>
                <div class="col-md-6">
                    <label class="special-checkbox">Grandes
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                    <label class="special-checkbox">Premium
                        <input type="checkbox" />
                        <span class="checkmark"></span>
                    </label>
                </div>	
            </div> 
         );
    }
}
 
export default CategoryFilter;