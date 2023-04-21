const ContactForm = () => {
	return (
		<div>
			<h1>Create Contact</h1>
			<form>
				<section>
					<div>
						<label htmlFor="first-name">First Name</label>
						<input type="text" id="first-name" />
					</div>
					<div>
						<label htmlFor="last-name">Last Name</label>
						<input type="text" id="last-name" />
					</div>
				</section>
				<section>
					<label htmlFor="status">Status</label>
					<div>
						<div>
							<input type="radio" id="active" name="status" value="active" />
							<label htmlFor="active">Active</label>
						</div>
						<div>
							<input
								type="radio"
								id="inactive"
								name="status"
								value="inactive"
							/>
							<label htmlFor="inactive">Inactive</label>
						</div>
					</div>
				</section>
			</form>
		</div>
	);
};

export default ContactForm;
