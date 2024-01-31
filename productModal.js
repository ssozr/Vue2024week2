export default {
    props:['modalProduct','modalData','productBtn','addImageUrlBtn','delImageUrlBtn','delProductBtn'],
    data(){
        return {
            productModal:'',
        }
    },
    methods: {
        openModal(name) {
            if(name === "add") {
                this.productModal.show()
              } else if(name === "edit"){
                this.productModal.show()
              } else if(name === "del") {
                this.delProductModal.show()
              }
        },
        closeModal(){
            this.productModal.hide()
            this.delProductModal.hide()
        }
    },
    template:`<div id="productModal" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
            aria-hidden="true">
        <div class="modal-dialog modal-xl">
        <div class="modal-content border-0">
            <div class="modal-header bg-dark text-white">
            <h5 id="productModalLabel" class="modal-title">
                <span>{{modalProduct.title}}</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
            <div class="row">
                <div class="col-sm-4">
                <div class="mb-2">
                    <div class="mb-3">
                    <label for="imageUrl" class="form-label">輸入主圖片網址</label>
                    <input type="text" class="form-control"
                            placeholder="請輸入主圖片連結" v-model="modalData.imageUrl">
                    </div>
                    <img class="img-fluid" :src="modalData.imageUrl" alt="">
                </div>
                <div>
                    <div class="mb-3">
                        <label for="imageUrl" class="form-label">新增多圖</label>
                        <input type="text" class="form-control"
                                placeholder="新增多圖" v-model="modalData.addImagesUrl">
                    </div>
                    <img class="img-fluid" :src="modalData.addImagesUrl" alt="">
                    <button class="btn btn-outline-primary btn-sm d-block w-100" @click="addImageUrlBtn">
                    新增圖片
                    </button>
                </div>
                <div v-for="(img, index) in this.modalData.imagesUrl" :key="img">
                    <img :src="img" alt="" pt-4>
                    <button class="btn btn-outline-danger btn-sm d-block w-100" @click="delImageUrlBtn(index)">
                    刪除圖片
                    </button>
                </div>
                </div>
                <div class="col-sm-8">
                <div class="mb-3">
                    <label for="title" class="form-label">標題</label>
                    <input id="title" type="text" class="form-control" placeholder="請輸入標題" v-model="modalData.title">
                </div>

                <div class="row">
                    <div class="mb-3 col-md-6">
                    <label for="category" class="form-label">分類</label>
                    <input id="category" type="text" class="form-control"
                            placeholder="請輸入分類" v-model="modalData.category">
                    </div>
                    <div class="mb-3 col-md-6">
                    <label for="unit" class="form-label">單位</label>
                    <input id="unit" type="text" class="form-control" placeholder="請輸入單位" v-model="modalData.unit">
                    </div>
                </div>

                <div class="row">
                    <div class="mb-3 col-md-6">
                    <label for="origin_price" class="form-label">原價</label>
                    <input id="origin_price" type="number" min="0" class="form-control" placeholder="請輸入原價" v-model.number="modalData.origin_price">
                    </div>
                    <div class="mb-3 col-md-6">
                    <label for="price" class="form-label">售價</label>
                    <input id="price" type="number" min="0" class="form-control"
                            placeholder="請輸入售價" v-model.number="modalData.price">
                    </div>
                </div>
                <hr>

                <div class="mb-3">
                    <label for="description" class="form-label">產品描述</label>
                    <textarea id="description" type="text" class="form-control"
                            placeholder="請輸入產品描述" v-model="modalData.description">
                    </textarea>
                </div>
                <div class="mb-3">
                    <label for="content" class="form-label">說明內容</label>
                    <textarea id="content" type="text" class="form-control"
                            placeholder="請輸入說明內容" v-model="modalData.content">
                    </textarea>
                </div>
                <div class="mb-3">
                    <div class="form-check">
                    <input id="is_enabled" class="form-check-input" type="checkbox"
                            :true-value="1" :false-value="0" v-model="modalData.is_enabled">
                    <label class="form-check-label" for="is_enabled">是否啟用</label>
                    </div>
                </div>
                </div>
            </div>
            </div>
            <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal" >
                取消
            </button>
            <button type="button" class="btn btn-primary" @click="productBtn">
                確認
            </button>
            </div>
        </div>
        </div>
        </div>
        
        <div id="delProductModal" ref="delProductModal" class="modal fade" tabindex="-1"
           aria-labelledby="delProductModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content border-0">
            <div class="modal-header bg-danger text-white">
              <h5 id="delProductModalLabel" class="modal-title">
                <span>刪除產品</span>
              </h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              是否刪除
              <strong class="text-danger">{{modalData.title}}</strong> 商品(刪除後將無法恢復)。
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
                取消
              </button>
              <button type="button" class="btn btn-danger" @click="delProductBtn">
                確認刪除
              </button>
            </div>
          </div>
        </div>
      </div>`,
    mounted() {
        this.productModal = new bootstrap.Modal(this.$refs.productModal)
        this.delProductModal = new bootstrap.Modal(this.$refs.delProductModal)
    }
}