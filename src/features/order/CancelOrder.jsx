import { redirect, Form } from "react-router-dom";
import { deleteOrder } from "../../services/apiRestaurant";

function CancelOrder() {
  return (
    <Form method="DELETE" className="flex items-center justify-between">
      {/* <input type="hidden" name="pizzaId" value={id} /> */}
      <button className="inline-block rounded-full bg-red-400 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-stone-600 transition-colors duration-300 hover:bg-red-300 focus:bg-red-300 focus:outline-none focus:ring focus:ring-red-300 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-2.5">
        Cancel Order
      </button>
    </Form>
  );
}

export default CancelOrder;

export async function action({ params }) {
  // const formData = await request.formData();
  // const data = Object.fromEntries(formData);

  // console.log(data.pizzaId);

  await deleteOrder(params.orderId);

  return redirect("/menu");
}
