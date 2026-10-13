"use client"
import React, { useEffect, useCallback, useId, PropsWithChildren } from "react"
import { AnimatePresence, AnimationProps, useReducedMotion, motion } from "motion/react"
import { defaultModalVariants, defaultBackdropVariants } from "./index.utils"
import Portal from "@/components/Other/Portal"
import "./index.module.css"

type ModalProps = PropsWithChildren<{
	isVisible: boolean; // Whether the modal is visible or not
	heading: string; // The heading of the modal
	onClickCloseBtn: (e: React.MouseEvent) => void; // Callback function when the close button is clicked
	onClickBackdrop?: (e: React.MouseEvent) => void; // Optional callback function when the backdrop is clicked
	onPressEscape?: (e: KeyboardEvent) => void; // Optional callback function when the escape key is pressed
	modalClassName?: string; // Optional class name for the modal
	animation?: AnimationProps; // Optional animation props for the modal
	backdropAnimation?: AnimationProps; // Optional animation props for the backdrop
}>

/**
 * Write a <Modal> component that uses the following props from the
 * created type ModalProps. The modal should be rendered in a <Portal> component and should use the AnimatePresence and motion components from the motion/react library to animate the modal and backdrop. The modal should have a heading, a close button, and should call the onClickCloseBtn callback when the close button is clicked. The modal should also call the onClickBackdrop callback when the backdrop is clicked and the onPressEscape callback when the escape key is pressed. The modal should have a unique id for its heading for accessibility purposes. The modal should also check for reduced motion settings and adjust its animations accordingly.
 * and the modal should have a visible backdrop background covering everything else.
 */

export default function Modal({ 
	isVisible,
	heading,
	onClickCloseBtn,
	onClickBackdrop = () => null,
	onPressEscape = () => null,
	modalClassName,
	animation = defaultModalVariants,
	backdropAnimation = defaultBackdropVariants,
	children
}: ModalProps) {
	// motion hook that returns if reduced motion is needed due to Reduced Motion device setting.
	const shouldReduceMotion = useReducedMotion()

	// check for reduced motion, if visible use it instead of animate, this also applies to the backdrop.
	const modalAnimation = shouldReduceMotion ? {} : animation
	const backdropAnimationProps = shouldReduceMotion ? {} : backdropAnimation

	// set uniquely generated id for modal's title header.
	const modalTitleId = useId()

	// Callback function to handle the escape key press
	const handleEscapeKeyPress = useCallback((e: KeyboardEvent) => {
		if (e.key === "Escape") {
			onPressEscape(e);
		}
	}, [onPressEscape])

	// Effect to add and remove the escape key press event listener
	useEffect(() => {
		if (isVisible) {
			document.addEventListener("keydown", handleEscapeKeyPress)
		} else {
			document.removeEventListener("keydown", handleEscapeKeyPress)
		}
		return () => {
			document.removeEventListener("keydown", handleEscapeKeyPress)
		}
	}, [isVisible, handleEscapeKeyPress])
	
	return (
		<Portal>
			<AnimatePresence mode="wait" onExitComplete={() => null}>
				{isVisible && (
					<>
					<motion.div
						key="modal-backdrop"
						className="modalBackdrop w-full h-full absolute top-0 left-0 z-[9999] flex items-center justify-center backdrop-blur-sm"
						variants={defaultBackdropVariants}
						initial="initial"
						animate="animated"
						exit="hidden"
						onClick={onClickBackdrop}
					>
						<motion.div
							key="modal"
							className={`${modalClassName || "modal"} z-[10000] rounded-lg p-6 m-3`}
							role="dialog"
							aria-modal="true"
							aria-labelledby={modalTitleId}
							variants={defaultModalVariants}
							initial="initial"
							animate="animated"
							exit="exit"
							{...modalAnimation}
						>
							<div className="modalContent dark:bg-taupe-700 rounded-lg p-5">
								<div className="modalHeader">
									<h2 id={modalTitleId} className="modalheading font-bold flex justify-center-safe">{heading}</h2>
									<button onClick={onClickCloseBtn} aria-label="Close Modal" className="closebtn rounded-sm dark:bg-slate-800 bg-slate-200 p-2 hover:dark:bg-slate-700 hover:bg-slate-300 transition-colors duration-300 ease-in-out">
										&times;
									</button>
								</div>
								<div className="p-6">
									{children}
								</div>
							</div>
						</motion.div>
					</motion.div>
				</>
				)}
			</AnimatePresence>
		</Portal>
	)
}
/**
 const Modal: React.FC<ModalProps> = ({
	isVisible,
	heading,
	onClickCloseBtn,
	onClickBackdrop = () => null,
	onPressEscape = () => null,
	modalClassName,
	animation = defaultModalVariants,
	backdropAnimation = defaultBackdropVariants,
	children
}) => {

	{/** Modal/Backdrop Logic 

	// motion hook that returns if reduced motion is needed due to Reduced Motion device setting.
	const shouldReduceMotion = useReducedMotion()

	// check for reduced motion, if visible use it instead of animate, this also applies to the backdrop.
	const modalAnimation = shouldReduceMotion ? {} : animation
	const backdropAnimationProps = shouldReduceMotion ? {} : backdropAnimation

	// set uniquely generated id for modal's title header.
	const modalTitleId = useId()

	// Callback function to handle the escape key press
	const handleEscapeKeyPress = useCallback((e: KeyboardEvent) => {
		if (e.key === "Escape") {
			onPressEscape(e);
		}
	}, [onPressEscape])

	// Effect to add and remove the escape key press event listener
	useEffect(() => {
		if (isVisible) {
			document.addEventListener("keydown", handleEscapeKeyPress)
		} else {
			document.removeEventListener("keydown", handleEscapeKeyPress)
		}
		return () => {
			document.removeEventListener("keydown", handleEscapeKeyPress)
		}
	}, [isVisible, handleEscapeKeyPress])
	
	return (
		<Portal>
			<AnimatePresence
			mode="wait"
			onExitComplete={() => null}
			>
				{isVisible && (
					<motion.div
					key="modal-backdrop"
					className="modalBackdrop w-full h-full fixed top-0 left-0 z-[9999] flex items-center justify-center backdrop-blur-sm"
					variants={defaultBackdropVariants}
					initial="initial"
					animate="animated"
					exit="hidden"
					onClick={onClickBackdrop}
					>
						<motion.div
							key="modal"
							className={`${modalClassName || "modal"} z-[10000] rounded-lg w-5 h-5 p-6 m-3`}
							role="dialog"
							aria-modal="true"
							aria-labelledby={modalTitleId}
							variants={defaultModalVariants}
							initial="initial"
							animate="animated"
							exit="exit"
							{...modalAnimation}
						>
							<div className="modalHeader">
								<h2 id={modalTitleId} className="modalheading">{heading}</h2>
								<button onClick={onClickCloseBtn} aria-label="Close Modal" className="closebtn rounded-sm dark:bg-slate-800 bg-slate-200 p-2 hover:dark:bg-slate-700 hover:bg-slate-300 transition-colors duration-300 ease-in-out">
									&times;
								</button>
							</div>
							<div className="p-6">
								{children}
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</Portal>
	)
}

export type { ModalProps }

export default Modal
**/
