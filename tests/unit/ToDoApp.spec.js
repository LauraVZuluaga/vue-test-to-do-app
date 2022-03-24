import { mount } from "@vue/test-utils";
import ToDoApp from "@/components/ToDoApp.vue";

describe("ToDoApp.vue", () => {
  it("should render todo text", () => {
    const wrapper = mount(ToDoApp);
    const toDo = wrapper.get('[data-test="todo"]');
    expect(toDo.text()).toBe("Learn Vue Testing");
  });

  it("should add new toDo", async () => {
    const wrapper = mount(ToDoApp);

    expect(wrapper.findAll('[data-test="todo]')).toHaveLength(1);
    await wrapper.get('[data-test="new-todo"]').setValue("New Todo");
    await wrapper.get('[data-test="form"]').trigger("submit");

    expect(wrapper.findAll('data-test="todo')).toHaveLength(2);
  });
});
