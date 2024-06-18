"use client";
import Image from "next/image";
import { useState } from "react";

export default function Home() {
	const [todo, setTodo] = useState([]);
	const [inputvalue, setImputvalue] = useState("");

	const handleInputValue = (event) => {
		setImputvalue(event.target.value);
	};

	const handleAddtodo = () => {
		setTodo([...todo, inputvalue]);
		setImputvalue("");
	};

  const handleDeleteTodo = (index: number) => {
    const newTodo = todo.filter((_, i) => i !== index);
    setTodo(newTodo);
  };
	return (
		<div className="mx-auto max-w-md">
			<h1 className="text-3xl font-bold mb-4">ToDo App</h1>
			<div className="flex">
				<input type="text" className="border" placeholder="Enter your to do item" value={inputvalue} onChange={handleInputValue} />
				<button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded" onClick={handleAddtodo}>
					Add
				</button>
			</div>
			<ul>
				{todo.map((todo, index) => (
					<li key={index} className="flex justify-between items-center mb-2">
            {todo}
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded" onClick={() => handleDeleteTodo(index)}>X</button>
					</li>
				))}
			</ul>
		</div>
	);
}
