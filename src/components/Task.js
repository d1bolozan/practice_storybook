const Task = ({ task: { id, title, state }, onArchiveTask, onPinTask }) => {
	return (
		<div className={`list-item ${state}`}>
			<label htmlFor="checked" aria-label={`archiveTask-${id}`} className="checkbox">
				<input
					type="checkbox"
					name="checked"
					id={`archiveTask-${id}`}
					disabled={true}
					checked={state === "TASK_ARCHIVED"}
				/>
				<span className="checkbox-custom" onClick={() => onArchiveTask(id)} />
			</label>

			<label htmlFor="title" aria-label={title} className="title">
				<input
					type="text"
					value={title}
					name="title"
					readOnly={true}
					placeholder="Input title"
					style={{ textOverflow: "ellipsis" }}
				/>
			</label>

			{state !== "TASK_ARCHIVED" && (
				<button
					className="pin-button"
					onClick={() => onPinTask(id)}
					id={`pinTask-${id}`}
					aria-label={`pinTask-${id}`}
					key={`pinTask-${id}`}
				>
					<span className={`icon-star`} />
				</button>
			)}
		</div>
	);
};

export default Task;
