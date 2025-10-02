import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

export default function BillingAccordion({ title, inputs }) {
  const [billingToggle, setBillingToggle] = useState(false);

  return (
    <div className="mb-6 rounded-lg border p-2 shadow-sm">
      <div className="flex items-center justify-between text-lg">
        <h3 className="mb-2 text-lg font-semibold">{title}</h3>
        {billingToggle ? (
          <FaAngleDown
            className="cursor-pointer"
            onClick={() => setBillingToggle(!billingToggle)}
          />
        ) : (
          <FaAngleUp
            className="cursor-pointer"
            onClick={() => setBillingToggle(!billingToggle)}
          />
        )}
      </div>

      <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
        {inputs.map((field, index) => (
          <div key={index} className="flex flex-col">
            <label
              htmlFor={field.name}
              className="mb-1 text-sm font-medium text-gray-700"
            >
              {field.label}
            </label>

            {field.type === "select" ? (
              <select
                id={field.name}
                name={field.name}
                className="w-full rounded-md border px-3 py-2"
                defaultValue=""
                {...field.props}
              >
                <option value="" disabled>
                  {field.placeholder || "Select option"}
                </option>
                {field.options?.map((opt, i) => (
                  <option key={i} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                className="w-full rounded-md border px-3 py-2"
                {...field.props}
              />
            ) : (
              <input
                id={field.name}
                name={field.name}
                placeholder={field.placeholder}
                type={field.type}
                className="w-full rounded-md border px-3 py-2"
                {...field.props}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
