import { jsonFormatter } from "../../utils/json.js";
import User from "../model/user.model.js";

const userCreate = async (req, res) => {
    console.log("working");
    try {
        
        const { fullName, fatherName, mobile, address } = req.body;
        const isExists = await User.findOne({
            where: { mobile }
        });
        if (isExists) {
            return res.json({
                message: "User already exists with this mobile number!",
                status: false
            })

        }
        let createUser = await User.create({
            fullName, mobile, fatherName, address
        });
        if (!createUser) {
            return res.json({
                message: "User not create",
                status: false
            })
        }
        return res.json({
            message: "User create successfully!!",
            status: true
        })
    } catch (error) {
        console.log(error);
        
        throw new Error("Error in userCrud", error)
    }
}
const updateUser = async (req, res) => {
    try {
        const { id, fullName, fatherName, address } = req.body;
        const isUser = await User.findByPk(id);
        if (!isUser) {
            return res.json({
                message: "User not found with this id.",
                status: false
            })
        }
        let updateUser = await User.update({
            fullName, address, fatherName,
        }, { where: { id } });
        if(!updateUser){
            return res.json({
                message: "User not update",
                status: false
            })
        }
        return res.json({
            message: "User update sucessfully!!",
            status: true
        })

    } catch (error) {
        throw new Error("Error in updateUser", error)
    }
}

const deleteUser =async(req,res)=>{
try {
    console.log(req.params);
    
const {id} = req.params;
    const isUser = await User.findByPk(id);
    if (!isUser) {
        return res.json({
            message: "User not found with this id.",
            status: false
        })
    }
    const deleteUser = await User.destroy({
        where:{id}
    })
    if(!deleteUser){
        return res.json({
            message: "User not delete",
            status: false
        })
    }
    return res.json({
        message: "User delete successfully!",
        status: true
    })
} catch (error) {
    console.log(error);
    
    throw new Error("Error in deleteUser", error)
}
}

const getAllUser = async(req,res)=>{
    try {
        
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;    
    
        const offset = (page - 1) * limit;    
        
        const { count, rows } = await User.findAndCountAll({
          limit,
          offset,
          order: [['id', 'ASC']]
        });    
        
        res.json({
          totalRecords: count,
          currentPage: page,
          totalPages: Math.ceil(count / limit),
          users: rows,
          message:"successfully get",
          status:true
        });
    
      } catch (error) {
        console.error("Error in getAllUser:", error);
        
      }
}
export { userCreate,updateUser,deleteUser,getAllUser }