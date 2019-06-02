import React, {PureComponent} from 'react'
import pell from 'pell'

  class View extends PureComponent {
    render() {
      return (
         
       
      <div class="input-group">
        <div class="custom-file">
          <input type="file" class="custom-file-input" id="inputGroupFile04" />
          <label class="custom-file-label" for="inputGroupFile04">Choose file</label>
        </div>
        <div class="input-group-append">
          <button class="btn btn-outline-secondary" type="button">Button</button>
        </div>
      </div>
      
     )
  }
}

export default View