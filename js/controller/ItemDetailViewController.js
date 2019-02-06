class ItemDetailViewController {
  constructor(view, model, generalController) {
    this.view = view;
    this.model = model;
    this.generalController = generalController;
    view.container.find("#dish-"+view.data.id).click()
    view.container.on('click', "#dish-"+view.data.id + " .dish-image, dish-name", (e) => {
      this.model.setCurrentSelection(view.data);
      console.log(this);
      console.log(this.model);
      console.log(this.generalController);
      this.generalController.renderDishDetail()
    })
  }
}